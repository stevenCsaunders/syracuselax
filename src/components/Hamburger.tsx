
import {FC} from 'react'
import { IProps } from '../App'


const Hamburger: FC<IProps> = ( { isNavOpen, handleClick }: IProps) => {
	// TODO
	//Make nav slightly smaller

	return (
		<div className="absolute top-2 right-2 z-10">
		
			<button
				className='hamburger hamburger--boring  md:invisible'
				type="button"
				onClick={handleClick}
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
		</div>
	)
}


export default Hamburger
