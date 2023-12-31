import { BankAccount } from 'src/bank-accounts/entities/bank-account.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum PixKeyKind {
  cpf = 'cpf',
  email = 'email',
}

@Entity({ name: 'pix-keys' })
export class PixKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  kind: string;

  @Column({ unique: true })
  key: string;

  @Column()
  bank_account_id: string;

  @ManyToOne(() => BankAccount)
  @JoinColumn({ name: 'bank_account' })
  bankAccount: BankAccount;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
