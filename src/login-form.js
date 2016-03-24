// 'LoginForm' class
export default class LoginForm {
  // "LoginForm" constructor
  constructor(form, email) {
    this.form = form;
    this.userinfo = [
    { username: `aaron@theironyard.com`, password: `password123` },
    { username: `admin@google.com`, password: `pandas` },
    { username: email, password: `honeycrisp` },
    ];
    // LoginForm listens for clicks
    this.form.addEventListener(`click`, (ev) => {
      ev.preventDefault();
      this.validateInputs();
    });
  }
  // LoginForm validate
  validate(username, password) {
    return this.userinfo.reduce((prev, current) => {
      if (current.username === username && current.password === password) {
        return true;
      }
      return prev;
    }, false);
  }
  // LoginForm validates inputes; find the values of the inputs in the form here
  validateInputs() {
    const emailInput = this.form.querySelector(`.login-form__email`).value;
    const passInput = this.form.querySelector(`.login-form__password`).value;
    const valmsg = this.form.querySelector(`.login-form__validation-message`);

   // Run Validate
    if (this.validate(emailInput, passInput)) {
      valmsg.innerText = ``;
    } else {
      valmsg.innerText = `The credentials are invalid`;
    }
  }
}
