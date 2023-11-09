import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: true 
})
class UsersModel extends Model {
    
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;
    
    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public Name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public Cic!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public IddCi!: number;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public status!: string;

}

export default UsersModel;
