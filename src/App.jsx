import { HomePage } from './jsx/01-pages/HomePage'
import { ShopPage } from './jsx/01-pages/ShopPage'
import { MishProvider } from './context/store'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './scss/styles.scss'


export const App = () => {	
	return(
		<MishProvider>
			<BrowserRouter>
				<div className='main-container'>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" >
							<Route index element={<ShopPage />}/>
							<Route path=":id" element={<ShopPage />}/>
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</MishProvider>
	
	)
}


