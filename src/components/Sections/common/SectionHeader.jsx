function SectionHeader({ title, description, children, beforeTitle }) {
    return (
        <div className="section-header bg-dark-10 border-y border-y-dark-15 py-5 md:py-10">
            <div className="container flex md:items-center justify-between gap-5 max-md:flex-col">
                <div className="text-wrapper flex-1">
                    {
                        beforeTitle && (
                            <div className="bg-dark-20 rounded-sm py-2 px-4 mb-4 w-fit">{beforeTitle}</div>
                        )
                    }
                    <h2 className="section-title text-2xl md:text-3xl font-medium">{title}</h2>
                    {
                        description && (
                            <p className="section-description">{description}</p>
                        )
                    }
                </div>
                {
                    children && (
                        <div className="children-wrapper">
                            {children}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SectionHeader;