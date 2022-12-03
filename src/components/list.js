function List(props) {
	console.log('props data');
	console.log(props.userData);
	return (
		<div>
			<br></br>
			<div>List User</div>
			<div>
				<form>
					<ul>
						{
							props.userData.length > 0 ? props.userData.map((x, i) =>
								<li key={i}>
									{
										x.hasOwnProperty('name') ? x.name : 'N/A'
									}
								</li>
							) : <li>No Data found</li>
						}
					</ul>
				</form>
			</div>
		</div>
	);
}

export default List;
