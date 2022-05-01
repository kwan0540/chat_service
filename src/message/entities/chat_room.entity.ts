import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity()
export class Chat_room {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: string;
}
