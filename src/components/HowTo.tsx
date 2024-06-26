
export const HowTo = () => {
  return (
    <div class="flex p-5 bg-primary text-primary-content">
        <div class="w-1/2 p-2">
            <img src="images/howto.svg" alt="How to use" />
        </div>
        <div class="w-1/2 p-2 p-l-5">
            <h2 class="text-2xl p-10">How to use</h2>
            <ul class="list-decimal text-lg mx-10">
                <li>Get the busylink.io server binary.</li>
                <li>Create a configuration file with your settings.</li>
                <li>Run!</li>
            </ul>
        </div>
    </div>
  )
}
