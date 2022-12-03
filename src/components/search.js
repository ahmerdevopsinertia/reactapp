import { useState } from "react";

function Search(props) {

	let [sKeyword, setSKeyword] = useState('');

	function onSearchKeyword(event) {
		event.preventDefault();
		if (sKeyword !== '' && props.userData.length > 0) {
			const filtered = props.userData.find(element => {
				return element.name === sKeyword;
			}) || [];
			props.filterUserList(filtered);
		} else {
			alert('Please enter keyword to search');
		}
	};

	function onSearchKeywordInput(event) {
		setSKeyword(event.target.value);
	};

	return (
		<div>
			<br></br>
			<div>Search User</div>
			<div>
				<form>
					<div>
						<input name='searchKeyword' onChange={onSearchKeywordInput} value={sKeyword}></input>
					</div>
					<div>
						<button onClick={onSearchKeyword}>Search</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Search;
