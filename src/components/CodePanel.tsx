import React from 'react';

function CodePanel() {
  const terraformCode = `
# Generated Terraform Code
resource "aws_lambda_function" "example" {
  filename      = "lambda_function_payload.zip"
  function_name = "lambda_function_name"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"
}

resource "aws_s3_bucket" "example" {
  bucket = "my-tf-test-bucket"
}
`.trim();

  return (
    <div className="h-full bg-gray-900 p-4 text-white overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold">Generated Terraform Code</h3>
        <button className="px-3 py-1 text-sm bg-blue-500 rounded hover:bg-blue-600">
          Deploy
        </button>
      </div>
      <pre className="text-sm font-mono">
        <code>{terraformCode}</code>
      </pre>
    </div>
  );
}

export default CodePanel;