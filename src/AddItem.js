import React from 'react';

// create AddItem component
class AddItem extends React.Component {
	render() {
		return (
			<form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" required ref="newItem" />
				<input type="submit" value="Add me" />
			</form>
		)
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.refs.newItem.value);

		// clean input after add element
		this.refs.newItem.value = '';
	}
}

export default AddItem;
