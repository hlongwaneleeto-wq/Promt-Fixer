document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab all our HTML elements
    const rawInput = document.getElementById('raw-input');
    const optimizeBtn = document.getElementById('optimize-btn');
    const optimizedOutput = document.getElementById('optimized-output');
    const copyBtn = document.getElementById('copy-btn');
    const toast = document.getElementById('toast');
    const radioInputs = document.querySelectorAll('input[name="prompt-style"]');
    const descItems = document.querySelectorAll('.desc-item');

    // 2. Define templates to instantly transform basic ideas
    const templates = {
        expert: (text) => `Act as an expert copywriter and prompt engineer. Please transform the following basic concept into a comprehensive, high-converting instruction:\n\n" ${text} "\n\nRequirements:\n- Define the ideal target audience persona.\n- Specify tone parameters (professional, engaging).\n- Provide structural constraints and clear formatting rules.`,
        creative: (text) => `Let's approach this with an outside-the-box perspective. Brainstorm a creative prompt frame for this idea:\n\n" ${text} "\n\nInclude a roleplay scenario, alternative perspectives to test against, and narrative hooks designed to evoke deep engagement.`,
        simple: (text) => `Create a straightforward, clear, and direct instruction based on this thought:\n\n" ${text} "\n\nStrip out all technical jargon. Keep the prompt action-oriented and highly efficient.`
    };

    // 3. Handle the main button click event
    optimizeBtn.addEventListener('click', () => {
        const textValue = rawInput.value.trim();
        
        if (!textValue) {
            alert('Please type an idea first!');
            return;
        }

        // Check which radio button style is currently selected (Expert, Creative, or Simple)
        const selectedStyle = document.querySelector('input[name="prompt-style"]:checked').value;
        
        // Generate the output using our template engine
        const generatedPrompt = templates[selectedStyle](textValue);
        
        // Push the result into the output textarea and enable the Copy button
        optimizedOutput.value = generatedPrompt;
        copyBtn.removeAttribute('disabled');
    });

    // 4. Handle "Copy to Clipboard" functionality
    copyBtn.addEventListener('click', () => {
        optimizedOutput.select();
        optimizedOutput.setSelectionRange(0, 99999); // Safe check for mobile layout responsiveness

        navigator.clipboard.writeText(optimizedOutput.value).then(() => {
            // Show toast feedback animation safely
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 2500);
        });
    });

    // 5. Visual sync: update style cards highlight when radio buttons change on mobile click
    radioInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            descItems.forEach(item => item.classList.remove('active-style'));
            const targetDesc = document.getElementById(`desc-${e.target.value}`);
            if (targetDesc) targetDesc.classList.add('active-style');
        });
    });
});
