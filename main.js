function updateTime(elementId, offset) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const cityTime = new Date(utc + (3600000 * offset));
    const hours = cityTime.getHours().toString().padStart(2, '0');
    const minutes = cityTime.getMinutes().toString().padStart(2, '0');
    const seconds = cityTime.getSeconds().toString().padStart(2, '0');
    document.getElementById(elementId).textContent = `${hours}:${minutes}:${seconds}`;
}

function updateAllTimes() {
    updateTime("moscow-time", 3); 
    updateTime("spb-time", 3); 
    updateTime("ekb-time", 5);
    updateTime("novosibirsk-time", 7); 
    updateTime("krasnoyarsk-time", 7); 
    updateTime("ny-time", -4); 
    updateTime("la-time", -7); 
    updateTime("chicago-time", -5); 
    updateTime("houston-time", -5); 
    updateTime("philadelphia-time", -4); 
    updateTime("london-time", 0); 
    updateTime("birmingham-time", 0); 
    updateTime("liverpool-time", 0); 
    updateTime("manchester-time", 0);
    updateTime("glasgow-time", 0); 
    updateTime("toronto-time", -4); 
    updateTime("vancouver-time", -7); 
    updateTime("montreal-time", -4); 
    updateTime("calgary-time", -6); 
    updateTime("ottawa-time", -4); 
    updateTime("beijing-time", 8);
    updateTime("shanghai-time", 8); 
    updateTime("guangzhou-time", 8); 
    updateTime("shenzhen-time", 8); 
    updateTime("chongqing-time", 8); 
    updateTime("tokyo-time", 9); 
    updateTime("osaka-time", 9); 
    updateTime("nagoya-time", 9); 
    updateTime("sapporo-time", 9); 
    updateTime("kyoto-time", 9); 
    updateTime("paris-time", 1); 
    updateTime("marseille-time", 1); 
    updateTime("lyon-time", 1); 
    updateTime("toulouse-time", 1); 
    updateTime("nice-time", 1); 
    updateTime("delhi-time", 5.5); 
    updateTime("mumbai-time", 5.5); 
    updateTime("bangalore-time", 5.5); 
    updateTime("chennai-time", 5.5); 
    updateTime("kolkata-time", 5.5); 
    updateTime("berlin-time", 2); 
    updateTime("hamburg-time", 2); 
    updateTime("munich-time", 2); 
    updateTime("cologne-time", 2); 
    updateTime("frankfurt-time", 2); 
    updateTime("rome-time", 2); 
    updateTime("milan-time", 2); 
    updateTime("naples-time", 2); 
    updateTime("turin-time", 2); 
    updateTime("palermo-time", 2); 
    updateTime("saopaulo-time", -3); 
    updateTime("riodejaneiro-time", -3); 
    updateTime("brasilia-time", -3); 
    updateTime("salvador-time", -3); 
    updateTime("fortaleza-time", -3); 
    updateTime("sydney-time", 10); 
    updateTime("melbourne-time", 10); 
    updateTime("brisbane-time", 10); 
    updateTime("perth-time", 8); 
    updateTime("adelaide-time", 9.5);
    updateTime("madrid-time", 2); 
    updateTime("barcelona-time", 2); 
    updateTime("valencia-time", 2); 
    updateTime("seville-time", 2); 
    updateTime("zaragoza-time", 2); 
    updateTime("mexicocity-time", -5); 
    updateTime("guadalajara-time", -5); 
    updateTime("monterrey-time", -5); 
    updateTime("puebla-time", -5); 
    updateTime("toluca-time", -5); 
    updateTime("seoul-time", 9); 
    updateTime("busan-time", 9); 
    updateTime("incheon-time", 9); 
    updateTime("daegu-time", 9); 
    updateTime("daejeon-time", 9); 
    updateTime("riyadh-time", 3); 
    updateTime("jeddah-time", 3); 
    updateTime("mecca-time", 3); 
    updateTime("medina-time", 3); 
    updateTime("dammam-time", 3); 
    updateTime("zurich-time", 2); 
    updateTime("geneva-time", 2); 
    updateTime("basel-time", 2); 
    updateTime("lausanne-time", 2); 
    updateTime("bern-time", 2); 
    updateTime("stockholm-time", 2); 
    updateTime("gothenburg-time", 2);
    updateTime("malmo-time", 2); 
    updateTime("uppsala-time", 2); 
    updateTime("vasteras-time", 2);
    updateTime("amsterdam-time", 2); 
    updateTime("rotterdam-time", 2); 
    updateTime("thehague-time", 2); 
    updateTime("utrecht-time", 2);
    updateTime("eindhoven-time", 2); 
    updateTime("oslo-time", 2); 
    updateTime("bergen-time", 2); 
    updateTime("stavanger-time", 2); 
    updateTime("trondheim-time", 2);
    updateTime("tromso-time", 2); 
}

setInterval(updateAllTimes, 1000);

document.addEventListener("DOMContentLoaded", updateAllTimes);
