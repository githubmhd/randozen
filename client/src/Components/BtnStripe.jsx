function BtnStripe() {
	const handleCheckout = () => {
		window.location.assign("https://buy.stripe.com/test_dR6bMg5A81ip9b2bIO");
	};

	return (
		<div className="flex justify-center items-center">
			<button
				onClick={handleCheckout}
				className="w-3/4 bg-[#01762a] text-white py-2 rounded-lg active:opacity-75 -translate-y-3">
				Réserver
			</button>
		</div>
	);
}

export default BtnStripe;
