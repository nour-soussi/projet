import CardMovie from './CardMovie';

function ListEnfant({Films,Caracter,Rate}) {

    return (
    <div 
    className='container'
    style={{display:'flex',flexWrap: 'wrap',
    width:'1000px',
    justifyContent:'space-around',
    marginTop:'20px',
    padding:'auto',
    }}>
    { 
    Films.filter((elt)=>
    (elt.title.toUpperCase().includes(Caracter.toUpperCase()) && elt.rate>=Rate && elt.genre=="enfant" ))
    .map((elt)=> (<CardMovie key={elt.id} movie={elt}/>
    ))}
    
    </div>
    );
}

export default ListEnfant;