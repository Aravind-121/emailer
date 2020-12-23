
module.exports = mail => {
    return `
      <html>
        <body>
          <div style="text-align: center;">
            <h3>hello</h3>
            <p>hi</p>
            <p>${mail.body}</p>
          </div>
        </body>
      </html>
    `;
  };