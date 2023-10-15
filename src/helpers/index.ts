export function changeRobotsMetaTagContent(content: string) {
    const meta = document.querySelector('meta[name="robots"]')
    meta?.setAttribute('content', content)
}