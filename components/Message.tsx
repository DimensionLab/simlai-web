import css from "./componentStyles/message.module.css";

export default function Message() {
  return (
    <section className={css.messageWrapper}>
      <span className="text-start px-4 py-10 text-2xl font-light max-w-3xl">
        We believe in the democratization of scientific-grade simulation tools
        by making it easy for anyone to develop physics-based simulations and
        deploy them in their workflows, regardless of their technical skills.
      </span>
    </section>
  );
}
