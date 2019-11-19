import Header_CSS from '../components/header_css'
import Link from 'next/link'

const Header = () => {
		return(
		<header>
			<Header_CSS />
			<div class="small">
				<Link href="/login_nomember">
					<span title="Log-In">로그인 </span>
				</Link>
				|
				<Link href="/sign_in">
					<span title="Sign-In"> 회원가입 </span>
				</Link>
				| <a>My Cinema</a>
	    </div>
	    <nav>
	      <ul>
					<li>
						<span>Logo-Image</span>
					</li>
					<li>
						<a>영화</a> <a>예매</a> <a>극장</a> <a>스토어</a>
					</li>
				</ul>
	    </nav>
		</header>
	)
}

export default Header
