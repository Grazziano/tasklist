import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        task: Sequelize.STRING,
        check: Sequelize.BOOLEAN,
        createdAt: {
          field: 'created_at',
          type: Sequelize.DATE,
        },
        updatedAt: {
          field: 'updated_at',
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        modelName: 'tasks',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Task