import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../action/action";
import { Link } from "react-router-dom";

const Detail= (props) =>{
    console.log(props)

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getDetail(props.math.params.id)); //accedo a mi id
    }, [dispatch])


    const myPokemon=useSelector((state)=>state.detail)




    return(
        <div>
             {
                myPokemon.length > 0 ?
                <div >
                    <div>
                        <h2 >{myPokemon[0].name}</h2>
                        
                        <img src={myPokemon[0].img ? myPokemon[0].img : noImage} alt="img not found" height="250px" width="200px" />
                        <div >
                            <h3>{myPokemon[0].types?.map((e, k) => {
                                    return (
                                        <div  key={k}>
                                            <img src={e.img} alt='X' />
                                            
                                        </div>
                                    )
                                })} </h3>
                        </div>
                        <h5 >HP:  {myPokemon[0].hp}</h5>
                        <h5 >Attack:  {myPokemon[0].attack}</h5>
                        <h5 >Defense:  {myPokemon[0].defense}</h5>
                        <h5 >Speed:  {myPokemon[0].speed}</h5>
                        <h5 >Height:  {myPokemon[0].height}</h5>
                        <h5 >Weight:  {myPokemon[0].weight}</h5>
                    </div>
                </div> : 
                <div>
                    <p> loading</p>
                </div>
            }
            <div>
            <Link to='/home'>
                <button>Go back</button>
            </Link>
            </div>
        </div>
    )
}
export default Detail;
