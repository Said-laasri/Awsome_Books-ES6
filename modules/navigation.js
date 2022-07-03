export default class Navigation {
  constructor() {
    this.mainPage = document.querySelector('.bookDisplay');
    this.addPage = document.querySelector('.bookAdding');
    this.contactPage = document.querySelector('.contact');
    this.first = document.querySelector('.firstPage');
    this.seconde = document.querySelector('.secondePage');
    this.tirth = document.querySelector('.tirthPage');
  }

  goTo() {
    this.first.addEventListener('click', () => {
      this.addPage.style.display = 'none';
      this.contactPage.style.display = 'none';
      this.mainPage.style.display = 'flex';
    });

    this.seconde.addEventListener('click', () => {
      this.addPage.style.display = 'flex';
      this.contactPage.style.display = 'none';
      this.mainPage.style.display = 'none';
    });

    this.tirth.addEventListener('click', () => {
      this.addPage.style.display = 'none';
      this.contactPage.style.display = 'flex';
      this.mainPage.style.display = 'none';
    });
  }
}
