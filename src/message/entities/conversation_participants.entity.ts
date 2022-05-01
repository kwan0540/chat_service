import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity()
export class Conversation_participants {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    chat_room_id: number;

    @CreateDateColumn()
    created_at: string;

    @Column({default: false})
    isread: boolean;
}
