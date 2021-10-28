function changesSocialMediasLinks(){
                
    for(let li of socialLinks.children){
      const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`

     }
 

  }

  const linksSocialMedias = {
    github : "kleitomberg",
    instagram : "kleitomberg",
    youtube : "OZAMVsz",
    twitter : "bsozx",
    facebook : "kleitom.berg"
  }

  changesSocialMediasLinks()

//função que pega as informações dos usuarios atraves da api do github
  function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedias.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      
      username.textContent=data.name
      userBio.textContent=data.bio      
      userLink.href=data.html_url
      photoperfil.src=data.avatar_url
      userlogin.textContent=data.login
      

    })

  }
  getGithubProfileInfos()
