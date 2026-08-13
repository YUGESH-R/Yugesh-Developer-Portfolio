const { execSync } = require("child_process");
const { Octokit } = require("@octokit/rest");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const pull_number = Number(process.env.PR_NUMBER);

function getDiff() {
  const diff = execSync(
    `git diff --unified=0 ${process.env.BASE_SHA} ${process.env.HEAD_SHA}`,
    { encoding: "utf8", maxBuffer: 1024 * 1024 * 10 }
  );

  return diff;
}

async function reviewCode(diff) {
  const prompt = `
You are a senior software engineer reviewing a GitHub pull request.

Review the following git diff.

Focus on:
- Bugs
- Security issues
- Performance problems
- Bad patterns
- Missing error handling
- Edge cases
- Code readability
- Test coverage

Avoid unnecessary comments.
If the code looks good, say that clearly.

Return the review in Markdown.

Git diff:
${diff}
`;

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return response.output_text;
}

async function postComment(review) {
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: pull_number,
    body: `## 🤖 AI Code Review\n\n${review}`,
  });
}

async function main() {
  const diff = getDiff();

  if (!diff.trim()) {
    console.log("No code changes found.");
    return;
  }

  const review = await reviewCode(diff);
  await postComment(review);

  console.log("AI review posted successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});