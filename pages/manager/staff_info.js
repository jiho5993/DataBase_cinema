import Managerpage from './managerpage'
import Managerpage_CSS from '../../components/managerpage_css'
import Link from 'next/link'

const Staff_info = () => {
	return (
		<div>
			<Managerpage />
			<Managerpage_CSS />
			<div>
				<div className="head2">
					<h2>직원 정보</h2>
				</div>
				<div className="user_info">
					<table className="type05">
						<tr>
		    			<th scope="row">강동호 | 남</th>
		    			<td>매점 관리 및 상품 판매 | 직원 점수 : 132점
		    				<Link href="./staff_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">강동호 | 남</th>
		    			<td>매점 관리 및 상품 판매 | 직원 점수 : 132점
		    				<Link href="./staff_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">강동호 | 남</th>
		    			<td>매점 관리 및 상품 판매 | 직원 점수 : 132점
		    				<Link href="./staff_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">강동호 | 남</th>
		    			<td>매점 관리 및 상품 판매 | 직원 점수 : 132점
		    				<Link href="./staff_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">강동호 | 남</th>
		    			<td>매점 관리 및 상품 판매 | 직원 점수 : 132점
		    				<Link href="./staff_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
						<tr>
		    			<th scope="row">강동호 | 남</th>
		    			<td>매점 관리 및 상품 판매 | 직원 점수 : 132점
		    				<Link href="./staff_info_details">
		    					<button>...더보기</button>
		    				</Link>
		    			</td>
						</tr>
					</table>
				</div>
			</div>   	
		</div>
	)
}

export default Staff_info