const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					id: 3,
					post_content:
						"3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit.",
					post_title: "3-Lorem Event",
					meta_keys: {
						day: "Oct 28",
						time: "07:00 pm",
						location: "NYC, NY",
						_groupId: 9,
						_rsvpNo: ["robert", "jjtime", "username1"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				},
				{
					id: 4,
					post_content:
						"4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit.",
					post_title: "4-Lorem Event",
					meta_keys: {
						day: "Nov 4",
						time: "07:00 pm",
						location: "Miami, FL",
						_groupId: 9,
						_rsvpNo: ["robert", "jjtime", "username1"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				},
				{
					id: 5,
					post_content:
						"5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit.",
					post_title: "5-Lorem Event",
					meta_keys: {
						day: "Nov 30",
						time: "07:00 pm",
						location: "Miami, FL",
						_groupId: 10,
						_rsvpNo: ["robert", "jjtime", "username1"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				},
				{
					id: 6,
					post_content:
						"6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit.",
					post_title: "6-Lorem Event",
					meta_keys: {
						day: "Dec 15",
						time: "05:00 pm",
						location: "Orlando, FL",
						_groupId: 10,
						_rsvpNo: ["rob", "jjt", "usern"],
						_rsvpYes: ["cheeselo", "newerad", "james19"]
					}
				}
			],
			groups: [
				{
					id: 9,
					post_content: "9-The nicest Meetup ever",
					post_title: "Group 9 - Tech Enthusiasts",
					members: ["rob", "jjt", "usern", "cheeselover", "neweradude", "james1996"]
				},
				{
					id: 10,
					post_content: "10-The nicest Meetup ever",
					post_title: "Group 10 - Tech Enthusiasts 2",
					members: ["ro", "jt", "user", "cheeselovr", "neweradud", "james199"]
				}
			],
			session: {
				id: 1,
				username: "user",
				user_friendly_name: "Ade",
				token: "123",
				active: false
			},
			login: {
				id: 0,
				user: "",
				active: false
			}
		},
		actions: {
			getGroup: user_group => {
				const store = getStore();
				const events = store.events;
				const groups = store.groups;
				var group = "";

				events.forEach(elem => {
					if (user_group === elem.meta_keys._groupId) {
						groups.map((e, i) => {
							if (e.id === elem.meta_keys._groupId) {
								group = i;
							}
						});
					}
				});

				return group;
			},
			getUser: () => {
				const login = getStore().login;

				return login.user;
			},
			getAuth: user => {
				const store = getStore();
				const session = store.session;
				//const login = store.login;
				var message = "";

				if (user) {
					if (session.username === user) {
						message = "Welcome!";
						session.active = true;
						//login.active = true;
						//login.user = session.user_friendly_name;
						//login.id = session.id;
					} else {
						message = "Incorrect Username or Password";
					}
				}

				return message;
			}
		}
	};
};

export default getState;
