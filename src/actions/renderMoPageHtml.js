const arrowSvg = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 485 485" fill="#5855CC" style="enable-background:new 0 0 485 485;" xml:space="preserve">
<g>
	<path d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5
		s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026
		C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5
		S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"/>
	<polygon points="242.5,299.791 135.589,193.228 114.411,214.476 242.5,342.148 370.589,214.476 349.411,193.228"/>
</g>
</svg>
`

const phaseDesc = 'Tommorow the Moon will be in a Waning Gibbous Phase. This is the first phase after the Full Moon occurs. It lasts roughly 7 days with the Moon’s illumination growing smaller each day until the Moon becomes a Last Quarter Moon with a illumination of 50%. The average Moon rise for this phase is between 9am and Midnight depending on the age of the phase. The moon rises later and later each night setting after sunrise in the morning. During this phase the Moon can also be seen in the early morning daylight hours on the western horizon.'

export default function (moonPhaseData, geoData) {
    return `
<div class="mph-widget">
    <div class="mph-row">
        <div class="mph-col">
            <div class="current-date">${moonPhaseData.dateFmt}</div>
            <div class="current-place">${geoData.city}, ${geoData.region}, ${geoData.country}</div>
            <div class="moon-phase-ico">
                <img alt="Moon Phase for Today" src="${moonPhaseData.phaseIco}" />
            </div>
        </div>
        <div class="mph-col">
            <div class="phase-name">${moonPhaseData.phase}</div>
            <div class="zodiac-name">Moon in <strong>${moonPhaseData.zodiac}</strong></div>
            <div class="moon-time">Moon Set: ${moonPhaseData.set}</div>
            <div class="moon-time">Moon Rise: ${moonPhaseData.rise}</div>
        </div>
    </div>
    <div class="mph-arrow">${arrowSvg}</div>
    <div class="mph-phase-desc">${phaseDesc}</div>
</div>
    `;
}