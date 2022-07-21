const workCardContainer = document.querySelector("#work-container");

const works = [
  {
    title: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: "./desktop-img3.png",
    lang_list: ["javascript", "html", "css"],
    breadcrumbs: ["CANOPY", "Back End Dev", "2015"],
    source:
      "https://github.com/Bantealem/Portfolio-setup-and-mobile-version-skeleton",
    live_demo:
      "https://bantealem.github.io/Portfolio-setup-and-mobile-version-skeleton/",
  },
  {
    title: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: "./desktop-img4.png",
    lang_list: ["javascript", "html", "css"],
    breadcrumbs: ["FACEBOOK", "Full Stack Dev", "2015"],
    source:
      "https://github.com/Bantealem/Portfolio-setup-and-mobile-version-skeleton",
    live_demo:
      "https://bantealem.github.io/Portfolio-setup-and-mobile-version-skeleton/",
  },
  {
    title: "Facebook 360",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: "./desktop-img-1.png",
    lang_list: ["javascript", "html", "css"],
    breadcrumbs: ["FACEBOOK", "Full Stack Dev", "2015"],
    source:
      "https://github.com/Bantealem/Portfolio-setup-and-mobile-version-skeleton",
    live_demo:
      "https://bantealem.github.io/Portfolio-setup-and-mobile-version-skeleton/",
  },
  {
    title: "Uber Navigation",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: "./desktop-img2.png",
    lang_list: ["javascript", "html", "css"],
    breadcrumbs: ["Uber", "Lead Developer", "2018"],
    source:
      "https://github.com/Bantealem/Portfolio-setup-and-mobile-version-skeleton",
    live_demo:
      "https://bantealem.github.io/Portfolio-setup-and-mobile-version-skeleton/",
  },
];

const breadcrumbsHtml = (workObj, key, bread) => {
  /* eslint-disable no-restricted-syntax */
  for (const breadcrumb in workObj[key].breadcrumbs) {
    if (breadcrumb) {
      bread = `<li>${workObj[key].breadcrumbs[breadcrumb]}</li>`;
    }
  }
  /* eslint-enable no-restricted-syntax */
  return bread;
};

const languageHtml = (workObj, key, langList) => {
  /* eslint-disable no-restricted-syntax */
  for (const lang in workObj[key].lang_list) {
    if (lang) {
      langList = `<li><span>${workObj[key].lang_list[lang]}</span></li>`;
    }
  }
  /* eslint-enable no-restricted-syntax */
  return langList;
};

const showWorkModal = (work) => { // fetch the work from the works object
  const workDetails = works[work];
  document.querySelector('.modal-title').innerHTML = workDetails.title; // insert title to the modal
  document.querySelector('.featured-image').src = workDetails.featured_image;// insert image to the modal
  document.querySelector('.modal-description').innerHTML = workDetails.details; // insert description to the modal
  document.querySelector('.work-modal-breadcrumbs > ul').innerHTML = breadcrumbsHtml(works, work); // add the breadcrumbs to the modal
  document.querySelector('.work-modal-languages > ul').innerHTML = languageHtml(works, work);// add the languages to the modal
  document.querySelector('#work-modal-live-demo').href = workDetails.live_demo;// add live demo link
  document.querySelector('#work-modal-source').href = workDetails.source;// add source link
  document.querySelector('.modal').style.display = 'flex';// show the modal with transition
};

const seeProjectButtons = document.querySelectorAll('.project-btn');
const closeModal = document.querySelector('.modal-close');

seeProjectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    showWorkModal(event.target.dataset.work);
    document.querySelector('.modal').style.display = 'flex';
  }, false);
});

closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

