function updateProfileImage(a) {
    fetch(`https://docinho.xyz/api/profile/${a}`).then((a => a.json())).then((e => {
        console.log(a)
        const t = e.user,
            r = document.querySelector(`.profile-img[data-user-id="${a}"]`),
            d = document.querySelector(`.nickr[data-user-id="${a}"]`);
            f = document.querySelector(`.nick[data-user-id="${a}"]`);
            r.src = t.avatar ? `https://cdn.discordapp.com/avatars/${t.id}/${t.avatar}.${t.avatar.startsWith("a_") ? "gif" : "png"}?size=512` : "https://cdn.discordapp.com/embed/avatars/1.png", 
        d.textContent = t.global_name,
        f.textContent = t.username
        for (let badge of e.badges) {
            let div = document.createElement('div')
            div.className = 'badge'
            div.style.backgroundImage = badge.id == 'premium' ? `url('https://images-ext-2.discordapp.net/external/AGAb6rxerDzjeJhDzXNS5CKgFT0DbGppfnPQiQ_Pfes/https/cdn3.emoji.gg/emojis/1895-subscriber-nitro-animated.gif')` : `url(https://cdn.discordapp.com/badge-icons/${badge.icon}.png)`
            div.dataset.tooltip = `${badge.description}`
            document.querySelector(`.badges[badges-user-id="${a}"]`).appendChild(div)
        }
    })).catch((a => {}))
}
updateProfileImage("196966568251490314");
updateProfileImage("476232070012731412");
