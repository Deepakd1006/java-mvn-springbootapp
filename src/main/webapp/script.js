// Array of logo URLs (replace with actual URLs of the logos)
const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/4/4b/Maven_logo.svg',
  'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  'https://www.jenkins.io/images/logos/jenkins/jenkins.png',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/CI_CD_icon.png',
  'https://upload.wikimedia.org/wikipedia/commons/7/7a/Java_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/eb/Amazon_Web_Services_Logo.svg',
  'https://d1.awsstatic.com/logos/cloudwatch-logo.6c42fb6d293efc739b1e50a89a24d51a.f15b226915b432dca8c8ad9437c2c59f.png',
];

const logoContainer = document.querySelector('.logo-background');

logos.forEach((logo) => {
  const img = document.createElement('img');
  img.src = logo;
  img.className = 'logo';
  img.style.top = `${Math.random() * 100}%`;
  img.style.left = `${Math.random() * 100}%`;
  img.style.transform = `rotate(${Math.random() * 360}deg)`;
  logoContainer.appendChild(img);
});
