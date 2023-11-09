import {Model, DataType, Table, Column} from 'sequelize-typescript';

//nombre, apellido, partido, id

@Table({
    tableName: 'candidates',
    timestamps: true
})

export class CandidateModel extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    surname!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    party!: string;
}

export default CandidateModel;