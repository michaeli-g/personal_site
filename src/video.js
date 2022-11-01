function CheckRes(props) {
    if (window.innerWidth > window.innerHeight) {
        return (
            <video autoPlay loop muted plays-inline="true" width="100%">
                <source src="assets/pictures/water.mp4" type="video/mp4" />
            </video>
        );
    }
    else {
        return (
            <img height="100%" width="100%" src="assets/pictures/sunrise.jpg" />
            )
    }
}

const root = ReactDOM.createRoot(document.getElementById('bkg'));
const element = <CheckRes />;
root.render(element);