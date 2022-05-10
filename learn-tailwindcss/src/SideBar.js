import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'

function SideBar() {
	return (
		<div className='fixed flex flex-col top-0 left-0 h-screen w-16 bg-primary text-secondary shadow-lg'>
			<SideBarIcon icon={<FaFire size='28' />} />
			<Divider />
			<SideBarIcon icon={<BsPlus size='32' />} />
			<SideBarIcon icon={<BsFillLightningFill size='20' />} />
			<SideBarIcon icon={<FaPoo size='20' />} />
			<Divider />
			<SideBarIcon icon={<BsGearFill size='22' />} />
		</div>
	)
}

const SideBarIcon = ({icon, text = 'tooltip 💡'}) => {
	return (
		<div className='sidebar-icon group'>
			{icon}
			<span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
		</div>
	)
}

const Divider = () => <hr className='sidebar-hr' />

// How group thing working above?
// Ans. We apply group to parent and then use variant `group-hover` to track the paren't hover state, yo!
export default SideBar
// continue from https://youtu.be/pfaSUYaSgRo?t=501
