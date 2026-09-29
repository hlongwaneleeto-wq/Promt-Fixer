<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prompt-Fi: AI Prompt Optimizer</title>
    
    <!-- 💰 GOOGLE ADSENSE INTEGRATION CODE -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4807737570671959" crossorigin="anonymous"></script>

    <style>
        :root {
            --bg-color: #0d1117;
            --card-bg: #161b22;
            --border-color: #30363d;
            --text-main: #c9d1d9;
            --text-muted: #8b949e;
            --primary: #238636;
            --primary-hover: #2ea043;
            --secondary: #21262d;
            --secondary-hover: #30363d;
            --accent: #58a6ff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            display: flex;
            justify-content: center;
            padding: 1.5rem 1rem;
            min-height: 100vh;
        }

        .container {
            width: 100%;
            max-width: 800px;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }

        header {
            text-align: center;
            margin-bottom: 0.25rem;
        }

        header h1 {
            font-size: 2.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #fff;
        }

        header p {
            color: var(--text-muted);
            font-size: 1rem;
            line-height: 1.4;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            width: 100%;
        }

        label {
            font-weight: 600;
            font-size: 0.95rem;
            color: #fff;
            display: block;
        }

        textarea {
            width: 100%;
            height: 150px;
            background-color: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 0.85rem;
            color: var(--text-main);
            font-size: 0.95rem;
            line-height: 1.5;
            resize: none;
            outline: none;
            transition: border-color 0.2s;
            display: block;
        }

        textarea:focus {
            border-color: var(--accent);
        }

        .config-bar {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            background-color: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            padding: 1.25rem;
            width: 100%;
        }

        .style-selector {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            width: 100%;
        }

        .radio-group {
            display: flex;
            gap: 0.5rem;
            width: 100%;
        }

        .radio-label {
            position: relative;
            cursor: pointer;
            flex: 1;
        }

        .radio-label input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }

        .custom-radio {
            display: block;
            width: 100%;
            padding: 0.75rem 0.5rem;
            background-color: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-main);
            transition: all 0.2s;
            text-align: center;
        }

        .radio-label input:checked + .custom-radio {
            background-color: var(--secondary-hover);
            border-color: var(--accent);
            color: #fff;
        }

        .btn {
            padding: 0.75rem 1.25rem;
            font-size: 0.95rem;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            border: 1px solid transparent;
            transition: background-color 0.2s;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .primary-btn {
            background-color: var(--primary);
            color: #fff;
        }

        .primary-btn:hover {
            background-color: var(--primary-hover);
        }

        .secondary-btn {
            background-color: var(--secondary);
            color: var(--text-main);
            border-color: var(--border-color);
            margin-bottom: 0.5rem;
        }

        .secondary-btn:hover:not(:disabled) {
            background-color: var(--secondary-hover);
        }

        .secondary-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .ad-container {
            text-align: center;
            margin: 1rem 0;
            min-height: 90px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px dashed var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
            font-size: 0.8rem;
            border-radius: 6px;
        }

        .toast {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: #24292f;
            border: 1px solid var(--border-color);
            color: var(--accent);
            padding: 0.6rem 1.2rem;
            border-radius: 6px;
            font-size: 0.9rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            transition: opacity 0.3s ease;
            z-index: 100;
        }

        .hidden {
            opacity: 0;
            pointer-events: none;
        }

        footer {
            text-align: center;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border-color);
            display: flex;
            justify-content: center;
            gap: 1.5rem;
        }

        footer a {
            color: var(--text-muted);
            font-size: 0.85rem;
            text-decoration: none;
        }

        footer a:hover {
            color: var(--accent);
        }

        @media (min-width: 601px) {
            .config-bar {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .style-selector {
                flex-direction: row;
                align-items: center;
                width: auto;
            }
            .radio-group {
                width: auto;
            }
            .radio-label {
                flex: none;
            }
            .custom-radio {
                padding: 0.55rem 1.1rem;
                width: auto;
            }
            .btn {
                width: auto;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Prompt-Fi</h1>
            <p>Transform raw text into high-fidelity AI instructions instantly.</p>
        </header>

        <form id="promptForm" onsubmit="event.preventDefault(); runPromptOptimization();" style="display: flex; flex-direction: column; gap: 1.25rem; width: 100%;">
            <!-- User Input Section -->
            <section class="card">
                <label for="raw-input">Enter Raw Text / Idea:</label>
                <textarea id="raw-input" placeholder="Type your basic idea here (e.g., 'write an email asking for a raise')..."></textarea>
            </section>

            <!-- Configuration Options Bar -->
            <section class="config-bar">
                <div class="style-selector">
                    <span style="font-weight:600; font-size:0.95rem; color:#fff; margin-right: 0.5rem;">Contextual Style:</span>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="prompt-style" id="style-expert" value="expert" checked>
                            <span class="custom-radio">Expert</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="prompt-style" id="style-creative" value="creative">
                            <span class="custom-radio">Creative</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="prompt-style" id="style-simple" value="simple">
                            <span class="custom-radio">Simple</span>
                        </label>
                    </div>
                </div>
                <button type="submit" id="optimize-btn" class="btn primary-btn">Optimize Instruction</button>
            </section>

            <!-- Output Section -->
            <section class="card">
                <label for="optimized-output">Optimized AI Prompt:</label>
                <textarea id="optimized-output" placeholder="Your optimized prompt will appear here..."></textarea>
                <button type="button" id="copy-btn" class="btn secondary-btn">Copy to Clipboard</button>
            </section>

            <!-- 💰 GOOGLE ADSENSE DISPLAY BANNER UNIT -->
            <div class="ad-container">
                <ins class="adsbygoogle"
                     style="display:block"
