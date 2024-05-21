export type Snippet = {
  text: string;
  language: string;
  caption: string;
  link: string;
};

export const snippets: { [key: string]: Snippet } = {
  registration: {
    text: `function validateUsername() {
     const value_username = $(this).val();
     if (value_username !== '') {
      $.ajax({
        url: '/account/validate',
        data: { username: value_username },
        type: 'GET',
        success: function(errors) {
          if (errors.username) {
            renderError('#username', '#usernameMessage', errors.username);
          } else clearError('#username', '#usernameMessage');
         }
        });
      }
      else clearError('#username', '#usernameMessage');
  }
  
  $('#username').on('blur', validateUsername);
  $('#emailAddr').on('blur', validateEmail);
  $('#password').on('blur', validatePassword);
  `,
    language: "javascript",
    caption: `realtime_account_validation.js`,
    link: `https://github.com/internetarchive/openlibrary/pull/9190`,
  },
  newContributorGuide: {
    text: `And then check in with your issue's lead to determine what steps to follow and/ or double-check to ensure you're dealing with an actual merge conflict by:
    1. Following the steps in [Working on Your Branch](#working-on-your-branch) to confirm that your master is up to date and not "ahead" by any commits before trying to rebase again.
    2. Ensuring that your PR does not include any unrelated commits, by checking the "Outgoing" commits in the VSCode Source Control tab and/or the "Commits" tab on your PR on GitHub. If you find any, follow the steps in [PR Includes Unrelated Commits](#pr-includes-unrelated-commits).
    3. Ensuring that your commits don't include any unrelated changes, by checking the "Outgoing" changes in the VSCode Source Control tab and/or the "Files changed" tab on your PR on GitHub. If you find any, follow the steps in [Commits Include Unrelated Changes](#commits-include-unrelated-changes).
    4. Ensuring that you aren't getting this conflict because the [pre-commit CI](#pre-commit-and-the-github-ci) made some commits on your behalf. You'll see these in the "Commits" section on GitHub, and you'll want to pull them into your branch with \`git pull upstream name-of-your-branch\` before trying to rebase. After this, you'll need to run a \`git push -f origin HEAD\` to keep everything up to date.

  If you've tried each of the above steps, and you're still getting the merge conflict error, you can now either contact your issue's lead for help moving forward, or begin to [resolve it manually](#manual-merge-conflict-resolution).
    `,
    language: "markdown",
    caption: "Markdown for new guide",
    link: "https://github.com/internetarchive/openlibrary/wiki/Git-Cheat-Sheet/",
  },
};
