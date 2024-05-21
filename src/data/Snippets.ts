export type Snippet = {
  text: string;
  language: string;
  caption: string;
  link: string;
};

export const snippets: { [key: string]: Snippet } = {
  registration: {
    text: 
    `function validateUsername() {
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
};
