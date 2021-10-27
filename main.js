const linksSocialMedia = {
  github: 'Wesley-Sampaio',
  youtube: 'Wesleysilva2000',
  facebook: 'wesley2909',
  instagram: '_sampaiowesley',
  twitter: '_sampaiowesley'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

/* Pegas as informações do Github*/
function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      ;(userName.textContent = data.name), (userBio.textContent = data.bio)
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
