export const SubscriptionForm = () => {
    return (
        <form className="flex flex-col">
            <label htmlFor="email">Inscreva-se no Nosso Email:</label>
            <input type="email" placeholder="email@email.com" id="newsletter" className="rounded-[30px] bg-white py-3 px-5 min-w-86 placeholder-[#AAAAAA]" />
        </form>
    )
}