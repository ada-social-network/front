
import React from "react";

const Login = () => {
	return (
		<>
			<main>
				<section className="absolute w-full h-full">
					<div className="container mx-auto px-4 h-full">
						<div className="flex content-center items-center justify-center h-full">
							<div className="w-full lg:w-1/3">
								<div className="relative flex flex-col min-w-0 break-words mb-6 bg-white border-4 border-red">
									<div className="w-full">
										<h3 className="my-4 text-center text-5xl font-extrabold"> 
											Connexion
										</h3>
										<p className="font-extrabold text-center mb-2">
											Entrez votre adresse mail et mot de passe</p>
									</div>
									<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
										<form>
											<div className="relative w-full mt-8 mb-5">
												<input
													type="email"
													className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
													placeholder="Nom d’utilisateur ou e-mail"
													style={{ transition: "all .15s ease" }}
												/>
											</div>
											<div className="relative w-full mb-4">
												<input
													type="password"
													className="px-3 py-3 placeholder-black bg-white text-sm focus:outline-none focus:ring w-full border border-black"
													placeholder="Mot de passe"
													style={{ transition: "all .15s ease" }}
												/>
											</div>
											<div>
												<label className="inline-flex items-center cursor-pointer">
													<input
														id="customCheckLogin"
														type="checkbox"
														className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
														style={{ transition: "all .15s ease" }}
													/>
													<span className="ml-2 text-sm font-semibold text-gray-700">
														Se souvenir de moi
													</span>
												</label>
											</div>
											<div className="text-center mt-6 mb-10">
												<button
													className="bg-white text-black active:bg-gray-700 font-bold px-6 py-3 border-2 border-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
													type="button"
													style={{ transition: "all .15s ease" }}
												>
													Connexion
												</button>
											</div>
											<div className="flex flex-wrap mt-6">
												<div className="w-1/2">
													<a
														href="#pablo"
														onClick={e => e.preventDefault()}
														className="text-gray-500"
													>
														<small>Mot de passe oublié ?</small>
													</a>
												</div>
												<div className="w-1/2 text-right">
													<a
														href="#pablo"
														onClick={e => e.preventDefault()}
														className="text-gray-500"
													>
														<small>Inscription</small>
													</a>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default Login