const Preload = ({windowloaded, dataloaded}) => {
    return (  
        <>
            {windowloaded && dataloaded?
                null
            :
                <section id="preload">
                    <div>
                    <div className="d-flex align-items-center">
                        <h3><strong>Cargando...</strong></h3>
                        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                    </div>
                </section>
            }
            
        </>
    );
}
 
export default Preload;