module.exports = {
	name: 'delete',
	description: 'Deletes 100 messages!',
	execute(message, args) {
        message.channel.bulkDelete(100);
    },
    
};