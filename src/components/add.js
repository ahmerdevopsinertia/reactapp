import { useState } from "react";

function Add({ populateUserList }) {
	let [user, setUser] = useState({
		name: '',
		email: '',
		mobile: '',
	});

	function handleSubmit(event) {
		event.preventDefault();
		if (user.name && user.email && user.mobile) {
			populateUserList(user);
			setUser({
				name: '',
				email: '',
				mobile: '',
			});
		} else {
			alert('Please enter all the values');
		}
	}

	function handleOnChange(event) {
		if (event.target.name === 'name') {
			setUser({ ...user, name: event.target.value });
		} else if (event.target.name === 'email') {
			setUser({ ...user, email: event.target.value });
		} else {
			setUser({ ...user, mobile: event.target.value });
		}
	}

	return (
		<div className="">
			<br></br>
			<div>Add User</div>
			<div>
				<form>
					<div>
						<div>
							<label>Name</label>
							<input type='text' name='name' onChange={handleOnChange} value={user.name} />
						</div>
						<br></br>
						<div>
							<label>Email</label>
							<input type='email' name='email' onChange={handleOnChange} value={user.email} />
						</div>
						<br></br>
						<div>
							<label>Mobile</label>
							<input type='text' name='mobile' onChange={handleOnChange} value={user.mobile} />
						</div>
						<br></br>
						<button type='submit' onClick={handleSubmit}>Add</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Add;
