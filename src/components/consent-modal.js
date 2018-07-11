import React from 'react'
import {Close} from './icons'
import Apps from './apps'

export default class ConsentModal extends React.Component {

    render(){
        const {hide, saveAndHide, declineAndHide, config, manager, t} = this.props

        let closeLink
        if (!config.mustConsent)
            closeLink = <a className="hide" onClick={hide} href="#"><Close /></a>

        const ppLink = <a onClick={(e) => {hide()}} href={config.privacyPolicy}>{t(['consentModal','privacyPolicy','name'])}</a>
        return <div className="cookie-modal">
            <div className="cookie-modal-bg" onClick={hide}/>
            <div className="cookie-modal-modal">
                <div className="cookie-modal-header">
                    {closeLink}
                    <h1 className="title">{t(['consentModal', 'title'])}</h1>
                    <p>
                        {t(['consentModal','description'])} &nbsp;
                        {t(['consentModal','privacyPolicy','text'], {privacyPolicy : ppLink})}
                    </p>
                </div>
                <div className="cookie-modal-body">
                    <Apps t={t} config={config} manager={manager} />
                </div>
                <div className="cookie-modal-footer">
                    <a className="cookie-modal-btn cookie-modal-btn-primary" href="#" onClick={saveAndHide}>{t(['save'])}</a>
                    <a target="_blank" className="cookie-modal-powered-by" href={config.poweredBy || 'https://klaro.kiprotect.com'}>{t(['poweredBy'])}</a>
                </div>
            </div>
        </div>
    }
}

