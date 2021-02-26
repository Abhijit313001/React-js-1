import Auxliary from '../../hoc/Auxiliary';



const layout = (props) => (

	<Auxliary>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className='content'>
			{props.children}
		</main>
	</Auxliary>

	)


export default layout;