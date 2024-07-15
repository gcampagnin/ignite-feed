import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css"

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://avatars.githubusercontent.com/u/9133583?v=4" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Gustavo Campagnin</strong>
							<time title="11 de Maio às 08:15h" dateTime="2024-05-11 08:15:46">Cerca de 1h atrás</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom Devon, parabéns!!</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}