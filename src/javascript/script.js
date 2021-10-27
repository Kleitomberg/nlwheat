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
