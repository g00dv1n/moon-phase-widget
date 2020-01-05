/*
moonPhaseData
----------------------------------------
age: 19.374755813004587
dateFmt: "Monday, December 16th 2019"
phase: "Waning gibbous"
phaseIco: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABm"
rise: "Monday, December 16th 2019, 8:26:01 pm"
set: "Monday, December 16th 2019, 11:20:10 am"
trajectory: "descendent"
zodiac: "leo"
link: "https://moonorganizer.com/en/"
linkLabel:"Learn More"
-----------------------------------------

geoData
-----------------------------------------
city: "Kyiv"
country: "UA"
hostname: "nastya.corbina.com.ua"
ip: "31.43.145.164"
latitude: 50.4547
loc: "50.4547,30.5238"
longitude: 30.5238
org: "AS48438 Corbina Telecom Llc."
postal: "03027"
readme: "https://ipinfo.io/missingauth"
region: "Kyiv City"
timezone: "Europe/Kiev"
------------------------------------------

*/

export default function (moonPhaseData, geoData) {
    return `
<div class="mph-widget">
    <div class="mph-widget-body">
        <div class="mph-col">
            <div class="mph-row">
                <div class="current-date">${moonPhaseData.dateFmt}</div>
            </div>
            <div class="mph-row">
                <div class="current-place">${geoData.city}, ${geoData.country}</div>
            </div>
            <div class="mph-row">
                <div class="moon-phase-ico">
                    <img src="${moonPhaseData.phaseIco}" />
                </div>
            </div>
        </div>
        <div class="mph-col">
            <div class="mph-row">
                <div class="phase-name">${moonPhaseData.phase}</div>
            </div>
            <div class="mph-row">
                <div class="zodiac-name">Moon in <strong>${moonPhaseData.zodiac}</strong></div>
            </div>
            <div class="mph-row">
                <div>Set: </div>
                <div class="moon-time">${moonPhaseData.set}</div>
            </div>
            <div class="mph-row">
                <div>Rise: </div>
                <div class="moon-time">${moonPhaseData.rise}</div>
            </div>
        </div>
    </div>
    <div class="mph-row mph-link">
        <a href="${moonPhaseData.link}" target="_blank">${moonPhaseData.linkLabel}</a>
    </div>
</div>
    `;
}