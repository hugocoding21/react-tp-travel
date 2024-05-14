export function Agency() {
  return (
    <div>
      <section
        className='banner'
        style={{
          backgroundImage: "url('https://picsum.photos/1200/800?image=192')",
        }}>
        <div className='banner__wrapper'>
          <div>
            <h2>Notre Agence</h2>
            <p>Voici la liste de nos agences dans le monde</p>
          </div>
        </div>
      </section>
      <section className='destinations-section-1'>
        <div className='destination'>
          <div
            className='destination__banner'
            style={{
              backgroundImage:
                "url('https://picsum.photos/1200/800?image=456')",
            }}>
            <div>
              <h3>France</h3>
            </div>
          </div>
          <div className='destination__city-list'>
            15 rue de la paix
            <br />
            75010, Paris
            <br />
            France
            <br />
            +1 0805-540-801
            <br />
            <a href='mailto:france@travel.agency'>france@travel.agency</a>
          </div>
        </div>
      </section>
    </div>
  );
}
