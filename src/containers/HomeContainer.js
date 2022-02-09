import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart , RemoveFromCart} from '../service/actions/actions'


const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    RemoveFromCartHandler:data=>dispatch(RemoveFromCart())
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;