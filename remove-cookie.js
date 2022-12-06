document.addEventListener('DOMContentLoaded', () => {

    const deleteCookieButton = document.getElementById( 'deleteCookieButton' );

    function setCookie( name, value, days ) {
        let expires = '';

        if ( days ) {
            let date = new Date();
            date.setTime( date.getTime() + days * 24 * 60 * 60 * 1000 );
            expires = '; expires=' + date.toUTCString();
        }

        document.cookie = name + '=' + ( value || '' ) + expires + '; path=/';
    }

    deleteCookieButton.addEventListener( 'click' , () => {
        const iframes = document.querySelectorAll( '.consent-container [data-src]' );

        iframes.forEach( ( iframe ) => {
            iframe.removeAttribute( 'src' );
            iframe.style.display = 'none';
        });

        document.querySelectorAll( '.consent-notice' ).forEach( element => {
            element.style.display = 'unset';
        });

        setCookie( 'consent_content', '', -1 );
    })

});
