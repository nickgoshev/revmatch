const Creator = require('./Creator');
const Event = require('./Event');

User.hasMany(Event, {
  foreignKey: 'creator_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(Creator, {
  foreignKey: 'creator_id'
});

module.exports = { Creator, Event };
